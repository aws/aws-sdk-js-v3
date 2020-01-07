import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { PutSkillAuthorizationRequest, PutSkillAuthorizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutSkillAuthorizationCommandInput = PutSkillAuthorizationRequest;
export declare type PutSkillAuthorizationCommandOutput = PutSkillAuthorizationResponse & __MetadataBearer;
export declare class PutSkillAuthorizationCommand extends $Command<PutSkillAuthorizationCommandInput, PutSkillAuthorizationCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: PutSkillAuthorizationCommandInput;
    constructor(input: PutSkillAuthorizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutSkillAuthorizationCommandInput, PutSkillAuthorizationCommandOutput>;
    private serialize;
    private deserialize;
}
