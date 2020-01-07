import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { BatchCheckLayerAvailabilityRequest, BatchCheckLayerAvailabilityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchCheckLayerAvailabilityCommandInput = BatchCheckLayerAvailabilityRequest;
export declare type BatchCheckLayerAvailabilityCommandOutput = BatchCheckLayerAvailabilityResponse & __MetadataBearer;
export declare class BatchCheckLayerAvailabilityCommand extends $Command<BatchCheckLayerAvailabilityCommandInput, BatchCheckLayerAvailabilityCommandOutput, ECRClientResolvedConfig> {
    readonly input: BatchCheckLayerAvailabilityCommandInput;
    constructor(input: BatchCheckLayerAvailabilityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchCheckLayerAvailabilityCommandInput, BatchCheckLayerAvailabilityCommandOutput>;
    private serialize;
    private deserialize;
}
