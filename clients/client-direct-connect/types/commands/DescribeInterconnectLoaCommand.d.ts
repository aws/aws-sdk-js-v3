import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeInterconnectLoaRequest, DescribeInterconnectLoaResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInterconnectLoaCommandInput = DescribeInterconnectLoaRequest;
export declare type DescribeInterconnectLoaCommandOutput = DescribeInterconnectLoaResponse & __MetadataBearer;
export declare class DescribeInterconnectLoaCommand extends $Command<DescribeInterconnectLoaCommandInput, DescribeInterconnectLoaCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeInterconnectLoaCommandInput;
    constructor(input: DescribeInterconnectLoaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInterconnectLoaCommandInput, DescribeInterconnectLoaCommandOutput>;
    private serialize;
    private deserialize;
}
