import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DescribeSubscriptionRequest, DescribeSubscriptionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSubscriptionCommandInput = DescribeSubscriptionRequest;
export declare type DescribeSubscriptionCommandOutput = DescribeSubscriptionResponse & __MetadataBearer;
export declare class DescribeSubscriptionCommand extends $Command<DescribeSubscriptionCommandInput, DescribeSubscriptionCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DescribeSubscriptionCommandInput;
    constructor(input: DescribeSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSubscriptionCommandInput, DescribeSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
