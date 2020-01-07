import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteVolumeInput, DeleteVolumeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVolumeCommandInput = DeleteVolumeInput;
export declare type DeleteVolumeCommandOutput = DeleteVolumeOutput & __MetadataBearer;
export declare class DeleteVolumeCommand extends $Command<DeleteVolumeCommandInput, DeleteVolumeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteVolumeCommandInput;
    constructor(input: DeleteVolumeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVolumeCommandInput, DeleteVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
