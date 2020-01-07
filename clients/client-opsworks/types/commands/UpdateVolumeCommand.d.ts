import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { UpdateVolumeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateVolumeCommandInput = UpdateVolumeRequest;
export declare type UpdateVolumeCommandOutput = __MetadataBearer;
export declare class UpdateVolumeCommand extends $Command<UpdateVolumeCommandInput, UpdateVolumeCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: UpdateVolumeCommandInput;
    constructor(input: UpdateVolumeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVolumeCommandInput, UpdateVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
