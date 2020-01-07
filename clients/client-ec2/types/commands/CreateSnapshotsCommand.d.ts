import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateSnapshotsRequest, CreateSnapshotsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSnapshotsCommandInput = CreateSnapshotsRequest;
export declare type CreateSnapshotsCommandOutput = CreateSnapshotsResult & __MetadataBearer;
export declare class CreateSnapshotsCommand extends $Command<CreateSnapshotsCommandInput, CreateSnapshotsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateSnapshotsCommandInput;
    constructor(input: CreateSnapshotsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSnapshotsCommandInput, CreateSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
