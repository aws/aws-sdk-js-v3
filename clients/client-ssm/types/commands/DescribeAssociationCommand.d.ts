import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeAssociationRequest, DescribeAssociationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAssociationCommandInput = DescribeAssociationRequest;
export declare type DescribeAssociationCommandOutput = DescribeAssociationResult & __MetadataBearer;
export declare class DescribeAssociationCommand extends $Command<DescribeAssociationCommandInput, DescribeAssociationCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeAssociationCommandInput;
    constructor(input: DescribeAssociationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAssociationCommandInput, DescribeAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
