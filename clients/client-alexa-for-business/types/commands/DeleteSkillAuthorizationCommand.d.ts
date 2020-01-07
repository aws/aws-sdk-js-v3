import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteSkillAuthorizationRequest, DeleteSkillAuthorizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSkillAuthorizationCommandInput = DeleteSkillAuthorizationRequest;
export declare type DeleteSkillAuthorizationCommandOutput = DeleteSkillAuthorizationResponse & __MetadataBearer;
export declare class DeleteSkillAuthorizationCommand extends $Command<DeleteSkillAuthorizationCommandInput, DeleteSkillAuthorizationCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DeleteSkillAuthorizationCommandInput;
    constructor(input: DeleteSkillAuthorizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSkillAuthorizationCommandInput, DeleteSkillAuthorizationCommandOutput>;
    private serialize;
    private deserialize;
}
