import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Connections, DescribeHostedConnectionsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeHostedConnectionsCommandInput = DescribeHostedConnectionsRequest;
export declare type DescribeHostedConnectionsCommandOutput = Connections & __MetadataBearer;
export declare class DescribeHostedConnectionsCommand extends $Command<DescribeHostedConnectionsCommandInput, DescribeHostedConnectionsCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeHostedConnectionsCommandInput;
    constructor(input: DescribeHostedConnectionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHostedConnectionsCommandInput, DescribeHostedConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
