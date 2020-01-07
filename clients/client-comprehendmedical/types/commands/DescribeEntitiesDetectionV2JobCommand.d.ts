import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { DescribeEntitiesDetectionV2JobRequest, DescribeEntitiesDetectionV2JobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEntitiesDetectionV2JobCommandInput = DescribeEntitiesDetectionV2JobRequest;
export declare type DescribeEntitiesDetectionV2JobCommandOutput = DescribeEntitiesDetectionV2JobResponse & __MetadataBearer;
export declare class DescribeEntitiesDetectionV2JobCommand extends $Command<DescribeEntitiesDetectionV2JobCommandInput, DescribeEntitiesDetectionV2JobCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: DescribeEntitiesDetectionV2JobCommandInput;
    constructor(input: DescribeEntitiesDetectionV2JobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEntitiesDetectionV2JobCommandInput, DescribeEntitiesDetectionV2JobCommandOutput>;
    private serialize;
    private deserialize;
}
