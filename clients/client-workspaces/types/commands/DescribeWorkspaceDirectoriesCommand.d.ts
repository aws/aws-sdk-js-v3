import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeWorkspaceDirectoriesRequest, DescribeWorkspaceDirectoriesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeWorkspaceDirectoriesCommandInput = DescribeWorkspaceDirectoriesRequest;
export declare type DescribeWorkspaceDirectoriesCommandOutput = DescribeWorkspaceDirectoriesResult & __MetadataBearer;
export declare class DescribeWorkspaceDirectoriesCommand extends $Command<DescribeWorkspaceDirectoriesCommandInput, DescribeWorkspaceDirectoriesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeWorkspaceDirectoriesCommandInput;
    constructor(input: DescribeWorkspaceDirectoriesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorkspaceDirectoriesCommandInput, DescribeWorkspaceDirectoriesCommandOutput>;
    private serialize;
    private deserialize;
}
