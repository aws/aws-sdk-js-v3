import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { DescribeContinuousExportsRequest, DescribeContinuousExportsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeContinuousExportsCommandInput = DescribeContinuousExportsRequest;
export declare type DescribeContinuousExportsCommandOutput = DescribeContinuousExportsResponse & __MetadataBearer;
export declare class DescribeContinuousExportsCommand extends $Command<DescribeContinuousExportsCommandInput, DescribeContinuousExportsCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: DescribeContinuousExportsCommandInput;
    constructor(input: DescribeContinuousExportsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeContinuousExportsCommandInput, DescribeContinuousExportsCommandOutput>;
    private serialize;
    private deserialize;
}
