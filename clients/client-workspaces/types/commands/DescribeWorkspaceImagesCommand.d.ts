import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeWorkspaceImagesRequest, DescribeWorkspaceImagesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeWorkspaceImagesCommandInput = DescribeWorkspaceImagesRequest;
export declare type DescribeWorkspaceImagesCommandOutput = DescribeWorkspaceImagesResult & __MetadataBearer;
export declare class DescribeWorkspaceImagesCommand extends $Command<DescribeWorkspaceImagesCommandInput, DescribeWorkspaceImagesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeWorkspaceImagesCommandInput;
    constructor(input: DescribeWorkspaceImagesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorkspaceImagesCommandInput, DescribeWorkspaceImagesCommandOutput>;
    private serialize;
    private deserialize;
}
