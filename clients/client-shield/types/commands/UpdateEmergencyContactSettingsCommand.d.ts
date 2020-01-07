import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { UpdateEmergencyContactSettingsRequest, UpdateEmergencyContactSettingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateEmergencyContactSettingsCommandInput = UpdateEmergencyContactSettingsRequest;
export declare type UpdateEmergencyContactSettingsCommandOutput = UpdateEmergencyContactSettingsResponse & __MetadataBearer;
export declare class UpdateEmergencyContactSettingsCommand extends $Command<UpdateEmergencyContactSettingsCommandInput, UpdateEmergencyContactSettingsCommandOutput, ShieldClientResolvedConfig> {
    readonly input: UpdateEmergencyContactSettingsCommandInput;
    constructor(input: UpdateEmergencyContactSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEmergencyContactSettingsCommandInput, UpdateEmergencyContactSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
