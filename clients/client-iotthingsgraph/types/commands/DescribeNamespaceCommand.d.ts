import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DescribeNamespaceRequest, DescribeNamespaceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeNamespaceCommandInput = DescribeNamespaceRequest;
export declare type DescribeNamespaceCommandOutput = DescribeNamespaceResponse & __MetadataBearer;
export declare class DescribeNamespaceCommand extends $Command<DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: DescribeNamespaceCommandInput;
    constructor(input: DescribeNamespaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput>;
    private serialize;
    private deserialize;
}
