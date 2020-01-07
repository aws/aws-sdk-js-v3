import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBClusterEndpointMessage, DescribeDBClusterEndpointsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBClusterEndpointsCommandInput = DescribeDBClusterEndpointsMessage;
export declare type DescribeDBClusterEndpointsCommandOutput = DBClusterEndpointMessage & __MetadataBearer;
export declare class DescribeDBClusterEndpointsCommand extends $Command<DescribeDBClusterEndpointsCommandInput, DescribeDBClusterEndpointsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBClusterEndpointsCommandInput;
    constructor(input: DescribeDBClusterEndpointsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBClusterEndpointsCommandInput, DescribeDBClusterEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
