import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateSnapshotRequest, Snapshot } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSnapshotCommandInput = CreateSnapshotRequest;
export declare type CreateSnapshotCommandOutput = Snapshot & __MetadataBearer;
export declare class CreateSnapshotCommand extends $Command<CreateSnapshotCommandInput, CreateSnapshotCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateSnapshotCommandInput;
    constructor(input: CreateSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSnapshotCommandInput, CreateSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
