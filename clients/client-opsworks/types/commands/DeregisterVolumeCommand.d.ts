import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DeregisterVolumeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterVolumeCommandInput = DeregisterVolumeRequest;
export declare type DeregisterVolumeCommandOutput = __MetadataBearer;
export declare class DeregisterVolumeCommand extends $Command<DeregisterVolumeCommandInput, DeregisterVolumeCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DeregisterVolumeCommandInput;
    constructor(input: DeregisterVolumeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterVolumeCommandInput, DeregisterVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
