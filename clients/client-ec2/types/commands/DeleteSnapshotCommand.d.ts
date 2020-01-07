import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteSnapshotRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSnapshotCommandInput = DeleteSnapshotRequest;
export declare type DeleteSnapshotCommandOutput = __MetadataBearer;
export declare class DeleteSnapshotCommand extends $Command<DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteSnapshotCommandInput;
    constructor(input: DeleteSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
