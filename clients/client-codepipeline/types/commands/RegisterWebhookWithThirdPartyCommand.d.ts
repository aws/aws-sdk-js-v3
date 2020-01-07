import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { RegisterWebhookWithThirdPartyInput, RegisterWebhookWithThirdPartyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterWebhookWithThirdPartyCommandInput = RegisterWebhookWithThirdPartyInput;
export declare type RegisterWebhookWithThirdPartyCommandOutput = RegisterWebhookWithThirdPartyOutput & __MetadataBearer;
export declare class RegisterWebhookWithThirdPartyCommand extends $Command<RegisterWebhookWithThirdPartyCommandInput, RegisterWebhookWithThirdPartyCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: RegisterWebhookWithThirdPartyCommandInput;
    constructor(input: RegisterWebhookWithThirdPartyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterWebhookWithThirdPartyCommandInput, RegisterWebhookWithThirdPartyCommandOutput>;
    private serialize;
    private deserialize;
}
