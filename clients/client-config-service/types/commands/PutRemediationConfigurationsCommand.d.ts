import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutRemediationConfigurationsRequest, PutRemediationConfigurationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutRemediationConfigurationsCommandInput = PutRemediationConfigurationsRequest;
export declare type PutRemediationConfigurationsCommandOutput = PutRemediationConfigurationsResponse & __MetadataBearer;
export declare class PutRemediationConfigurationsCommand extends $Command<PutRemediationConfigurationsCommandInput, PutRemediationConfigurationsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutRemediationConfigurationsCommandInput;
    constructor(input: PutRemediationConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRemediationConfigurationsCommandInput, PutRemediationConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
