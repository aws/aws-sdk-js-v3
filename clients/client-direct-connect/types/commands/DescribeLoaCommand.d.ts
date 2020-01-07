import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeLoaRequest, Loa } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLoaCommandInput = DescribeLoaRequest;
export declare type DescribeLoaCommandOutput = Loa & __MetadataBearer;
export declare class DescribeLoaCommand extends $Command<DescribeLoaCommandInput, DescribeLoaCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeLoaCommandInput;
    constructor(input: DescribeLoaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLoaCommandInput, DescribeLoaCommandOutput>;
    private serialize;
    private deserialize;
}
