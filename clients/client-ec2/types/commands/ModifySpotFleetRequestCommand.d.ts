import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifySpotFleetRequestRequest, ModifySpotFleetRequestResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifySpotFleetRequestCommandInput = ModifySpotFleetRequestRequest;
export declare type ModifySpotFleetRequestCommandOutput = ModifySpotFleetRequestResponse & __MetadataBearer;
export declare class ModifySpotFleetRequestCommand extends $Command<ModifySpotFleetRequestCommandInput, ModifySpotFleetRequestCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifySpotFleetRequestCommandInput;
    constructor(input: ModifySpotFleetRequestCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifySpotFleetRequestCommandInput, ModifySpotFleetRequestCommandOutput>;
    private serialize;
    private deserialize;
}
