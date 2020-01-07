import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DescribeContainerInstancesRequest, DescribeContainerInstancesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeContainerInstancesCommandInput = DescribeContainerInstancesRequest;
export declare type DescribeContainerInstancesCommandOutput = DescribeContainerInstancesResponse & __MetadataBearer;
export declare class DescribeContainerInstancesCommand extends $Command<DescribeContainerInstancesCommandInput, DescribeContainerInstancesCommandOutput, ECSClientResolvedConfig> {
    readonly input: DescribeContainerInstancesCommandInput;
    constructor(input: DescribeContainerInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeContainerInstancesCommandInput, DescribeContainerInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
