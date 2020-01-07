import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DescribeEmergencyContactSettingsRequest, DescribeEmergencyContactSettingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEmergencyContactSettingsCommandInput = DescribeEmergencyContactSettingsRequest;
export declare type DescribeEmergencyContactSettingsCommandOutput = DescribeEmergencyContactSettingsResponse & __MetadataBearer;
export declare class DescribeEmergencyContactSettingsCommand extends $Command<DescribeEmergencyContactSettingsCommandInput, DescribeEmergencyContactSettingsCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DescribeEmergencyContactSettingsCommandInput;
    constructor(input: DescribeEmergencyContactSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEmergencyContactSettingsCommandInput, DescribeEmergencyContactSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
