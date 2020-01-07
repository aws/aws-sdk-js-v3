import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVolumeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVolumeCommandInput = DeleteVolumeRequest;
export declare type DeleteVolumeCommandOutput = __MetadataBearer;
export declare class DeleteVolumeCommand extends $Command<DeleteVolumeCommandInput, DeleteVolumeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteVolumeCommandInput;
    constructor(input: DeleteVolumeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVolumeCommandInput, DeleteVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
