import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { UnassignVolumeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UnassignVolumeCommandInput = UnassignVolumeRequest;
export declare type UnassignVolumeCommandOutput = __MetadataBearer;
export declare class UnassignVolumeCommand extends $Command<UnassignVolumeCommandInput, UnassignVolumeCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: UnassignVolumeCommandInput;
    constructor(input: UnassignVolumeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnassignVolumeCommandInput, UnassignVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
