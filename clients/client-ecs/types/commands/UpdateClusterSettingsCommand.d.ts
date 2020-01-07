import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateClusterSettingsRequest, UpdateClusterSettingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateClusterSettingsCommandInput = UpdateClusterSettingsRequest;
export declare type UpdateClusterSettingsCommandOutput = UpdateClusterSettingsResponse & __MetadataBearer;
export declare class UpdateClusterSettingsCommand extends $Command<UpdateClusterSettingsCommandInput, UpdateClusterSettingsCommandOutput, ECSClientResolvedConfig> {
    readonly input: UpdateClusterSettingsCommandInput;
    constructor(input: UpdateClusterSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateClusterSettingsCommandInput, UpdateClusterSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
