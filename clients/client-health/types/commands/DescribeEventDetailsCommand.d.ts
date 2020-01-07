import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEventDetailsRequest, DescribeEventDetailsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEventDetailsCommandInput = DescribeEventDetailsRequest;
export declare type DescribeEventDetailsCommandOutput = DescribeEventDetailsResponse & __MetadataBearer;
export declare class DescribeEventDetailsCommand extends $Command<DescribeEventDetailsCommandInput, DescribeEventDetailsCommandOutput, HealthClientResolvedConfig> {
    readonly input: DescribeEventDetailsCommandInput;
    constructor(input: DescribeEventDetailsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventDetailsCommandInput, DescribeEventDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
