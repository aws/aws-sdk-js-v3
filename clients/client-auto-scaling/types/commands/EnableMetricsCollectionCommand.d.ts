import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { EnableMetricsCollectionQuery } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableMetricsCollectionCommandInput = EnableMetricsCollectionQuery;
export declare type EnableMetricsCollectionCommandOutput = __MetadataBearer;
export declare class EnableMetricsCollectionCommand extends $Command<EnableMetricsCollectionCommandInput, EnableMetricsCollectionCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: EnableMetricsCollectionCommandInput;
    constructor(input: EnableMetricsCollectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableMetricsCollectionCommandInput, EnableMetricsCollectionCommandOutput>;
    private serialize;
    private deserialize;
}
