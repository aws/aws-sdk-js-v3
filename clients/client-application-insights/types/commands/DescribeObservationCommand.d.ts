import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { DescribeObservationRequest, DescribeObservationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeObservationCommandInput = DescribeObservationRequest;
export declare type DescribeObservationCommandOutput = DescribeObservationResponse & __MetadataBearer;
export declare class DescribeObservationCommand extends $Command<DescribeObservationCommandInput, DescribeObservationCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: DescribeObservationCommandInput;
    constructor(input: DescribeObservationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeObservationCommandInput, DescribeObservationCommandOutput>;
    private serialize;
    private deserialize;
}
