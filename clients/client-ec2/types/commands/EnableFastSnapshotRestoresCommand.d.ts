import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableFastSnapshotRestoresRequest, EnableFastSnapshotRestoresResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableFastSnapshotRestoresCommandInput = EnableFastSnapshotRestoresRequest;
export declare type EnableFastSnapshotRestoresCommandOutput = EnableFastSnapshotRestoresResult & __MetadataBearer;
export declare class EnableFastSnapshotRestoresCommand extends $Command<EnableFastSnapshotRestoresCommandInput, EnableFastSnapshotRestoresCommandOutput, EC2ClientResolvedConfig> {
    readonly input: EnableFastSnapshotRestoresCommandInput;
    constructor(input: EnableFastSnapshotRestoresCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableFastSnapshotRestoresCommandInput, EnableFastSnapshotRestoresCommandOutput>;
    private serialize;
    private deserialize;
}
