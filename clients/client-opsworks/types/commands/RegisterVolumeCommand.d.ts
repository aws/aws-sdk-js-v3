import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { RegisterVolumeRequest, RegisterVolumeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterVolumeCommandInput = RegisterVolumeRequest;
export declare type RegisterVolumeCommandOutput = RegisterVolumeResult & __MetadataBearer;
export declare class RegisterVolumeCommand extends $Command<RegisterVolumeCommandInput, RegisterVolumeCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: RegisterVolumeCommandInput;
    constructor(input: RegisterVolumeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterVolumeCommandInput, RegisterVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
