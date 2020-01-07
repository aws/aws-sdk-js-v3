import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribeEventBusRequest, DescribeEventBusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEventBusCommandInput = DescribeEventBusRequest;
export declare type DescribeEventBusCommandOutput = DescribeEventBusResponse & __MetadataBearer;
export declare class DescribeEventBusCommand extends $Command<DescribeEventBusCommandInput, DescribeEventBusCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: DescribeEventBusCommandInput;
    constructor(input: DescribeEventBusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventBusCommandInput, DescribeEventBusCommandOutput>;
    private serialize;
    private deserialize;
}
