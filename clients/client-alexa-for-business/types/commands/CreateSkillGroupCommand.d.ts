import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { CreateSkillGroupRequest, CreateSkillGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSkillGroupCommandInput = CreateSkillGroupRequest;
export declare type CreateSkillGroupCommandOutput = CreateSkillGroupResponse & __MetadataBearer;
export declare class CreateSkillGroupCommand extends $Command<CreateSkillGroupCommandInput, CreateSkillGroupCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: CreateSkillGroupCommandInput;
    constructor(input: CreateSkillGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSkillGroupCommandInput, CreateSkillGroupCommandOutput>;
    private serialize;
    private deserialize;
}
