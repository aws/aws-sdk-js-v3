import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { DeregisterWebhookWithThirdPartyInput, DeregisterWebhookWithThirdPartyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterWebhookWithThirdPartyCommandInput = DeregisterWebhookWithThirdPartyInput;
export declare type DeregisterWebhookWithThirdPartyCommandOutput = DeregisterWebhookWithThirdPartyOutput & __MetadataBearer;
export declare class DeregisterWebhookWithThirdPartyCommand extends $Command<DeregisterWebhookWithThirdPartyCommandInput, DeregisterWebhookWithThirdPartyCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: DeregisterWebhookWithThirdPartyCommandInput;
    constructor(input: DeregisterWebhookWithThirdPartyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterWebhookWithThirdPartyCommandInput, DeregisterWebhookWithThirdPartyCommandOutput>;
    private serialize;
    private deserialize;
}
