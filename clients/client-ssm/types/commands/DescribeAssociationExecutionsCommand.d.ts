import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeAssociationExecutionsRequest, DescribeAssociationExecutionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAssociationExecutionsCommandInput = DescribeAssociationExecutionsRequest;
export declare type DescribeAssociationExecutionsCommandOutput = DescribeAssociationExecutionsResult & __MetadataBearer;
export declare class DescribeAssociationExecutionsCommand extends $Command<DescribeAssociationExecutionsCommandInput, DescribeAssociationExecutionsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeAssociationExecutionsCommandInput;
    constructor(input: DescribeAssociationExecutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAssociationExecutionsCommandInput, DescribeAssociationExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
