import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Connections, DescribeConnectionsOnInterconnectRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConnectionsOnInterconnectCommandInput = DescribeConnectionsOnInterconnectRequest;
export declare type DescribeConnectionsOnInterconnectCommandOutput = Connections & __MetadataBearer;
export declare class DescribeConnectionsOnInterconnectCommand extends $Command<DescribeConnectionsOnInterconnectCommandInput, DescribeConnectionsOnInterconnectCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeConnectionsOnInterconnectCommandInput;
    constructor(input: DescribeConnectionsOnInterconnectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConnectionsOnInterconnectCommandInput, DescribeConnectionsOnInterconnectCommandOutput>;
    private serialize;
    private deserialize;
}
