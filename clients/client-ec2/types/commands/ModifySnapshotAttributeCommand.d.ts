import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifySnapshotAttributeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifySnapshotAttributeCommandInput = ModifySnapshotAttributeRequest;
export declare type ModifySnapshotAttributeCommandOutput = __MetadataBearer;
export declare class ModifySnapshotAttributeCommand extends $Command<ModifySnapshotAttributeCommandInput, ModifySnapshotAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifySnapshotAttributeCommandInput;
    constructor(input: ModifySnapshotAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifySnapshotAttributeCommandInput, ModifySnapshotAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
