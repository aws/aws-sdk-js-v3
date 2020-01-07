import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DisableMetricsCollectionQuery } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableMetricsCollectionCommandInput = DisableMetricsCollectionQuery;
export declare type DisableMetricsCollectionCommandOutput = __MetadataBearer;
export declare class DisableMetricsCollectionCommand extends $Command<DisableMetricsCollectionCommandInput, DisableMetricsCollectionCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DisableMetricsCollectionCommandInput;
    constructor(input: DisableMetricsCollectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableMetricsCollectionCommandInput, DisableMetricsCollectionCommandOutput>;
    private serialize;
    private deserialize;
}
