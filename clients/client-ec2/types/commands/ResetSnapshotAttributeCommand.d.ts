import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ResetSnapshotAttributeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetSnapshotAttributeCommandInput = ResetSnapshotAttributeRequest;
export declare type ResetSnapshotAttributeCommandOutput = __MetadataBearer;
export declare class ResetSnapshotAttributeCommand extends $Command<ResetSnapshotAttributeCommandInput, ResetSnapshotAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ResetSnapshotAttributeCommandInput;
    constructor(input: ResetSnapshotAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetSnapshotAttributeCommandInput, ResetSnapshotAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
