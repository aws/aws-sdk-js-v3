import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribePartnerEventSourceRequest, DescribePartnerEventSourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePartnerEventSourceCommandInput = DescribePartnerEventSourceRequest;
export declare type DescribePartnerEventSourceCommandOutput = DescribePartnerEventSourceResponse & __MetadataBearer;
export declare class DescribePartnerEventSourceCommand extends $Command<DescribePartnerEventSourceCommandInput, DescribePartnerEventSourceCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: DescribePartnerEventSourceCommandInput;
    constructor(input: DescribePartnerEventSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePartnerEventSourceCommandInput, DescribePartnerEventSourceCommandOutput>;
    private serialize;
    private deserialize;
}
