import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeWorkspaceSnapshotsRequest, DescribeWorkspaceSnapshotsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeWorkspaceSnapshotsCommandInput = DescribeWorkspaceSnapshotsRequest;
export declare type DescribeWorkspaceSnapshotsCommandOutput = DescribeWorkspaceSnapshotsResult & __MetadataBearer;
export declare class DescribeWorkspaceSnapshotsCommand extends $Command<DescribeWorkspaceSnapshotsCommandInput, DescribeWorkspaceSnapshotsCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeWorkspaceSnapshotsCommandInput;
    constructor(input: DescribeWorkspaceSnapshotsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorkspaceSnapshotsCommandInput, DescribeWorkspaceSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
