import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetSkillGroupRequest, GetSkillGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSkillGroupCommandInput = GetSkillGroupRequest;
export declare type GetSkillGroupCommandOutput = GetSkillGroupResponse & __MetadataBearer;
export declare class GetSkillGroupCommand extends $Command<GetSkillGroupCommandInput, GetSkillGroupCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: GetSkillGroupCommandInput;
    constructor(input: GetSkillGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSkillGroupCommandInput, GetSkillGroupCommandOutput>;
    private serialize;
    private deserialize;
}
