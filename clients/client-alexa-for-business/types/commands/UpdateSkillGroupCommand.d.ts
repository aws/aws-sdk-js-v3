import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateSkillGroupRequest, UpdateSkillGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSkillGroupCommandInput = UpdateSkillGroupRequest;
export declare type UpdateSkillGroupCommandOutput = UpdateSkillGroupResponse & __MetadataBearer;
export declare class UpdateSkillGroupCommand extends $Command<UpdateSkillGroupCommandInput, UpdateSkillGroupCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: UpdateSkillGroupCommandInput;
    constructor(input: UpdateSkillGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSkillGroupCommandInput, UpdateSkillGroupCommandOutput>;
    private serialize;
    private deserialize;
}
