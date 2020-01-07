import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteSkillGroupRequest, DeleteSkillGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSkillGroupCommandInput = DeleteSkillGroupRequest;
export declare type DeleteSkillGroupCommandOutput = DeleteSkillGroupResponse & __MetadataBearer;
export declare class DeleteSkillGroupCommand extends $Command<DeleteSkillGroupCommandInput, DeleteSkillGroupCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DeleteSkillGroupCommandInput;
    constructor(input: DeleteSkillGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSkillGroupCommandInput, DeleteSkillGroupCommandOutput>;
    private serialize;
    private deserialize;
}
