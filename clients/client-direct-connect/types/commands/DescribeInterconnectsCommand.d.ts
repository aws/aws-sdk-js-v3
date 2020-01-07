import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeInterconnectsRequest, Interconnects } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInterconnectsCommandInput = DescribeInterconnectsRequest;
export declare type DescribeInterconnectsCommandOutput = Interconnects & __MetadataBearer;
export declare class DescribeInterconnectsCommand extends $Command<DescribeInterconnectsCommandInput, DescribeInterconnectsCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeInterconnectsCommandInput;
    constructor(input: DescribeInterconnectsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInterconnectsCommandInput, DescribeInterconnectsCommandOutput>;
    private serialize;
    private deserialize;
}
