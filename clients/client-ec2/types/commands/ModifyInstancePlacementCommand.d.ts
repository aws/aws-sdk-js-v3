import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstancePlacementRequest, ModifyInstancePlacementResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyInstancePlacementCommandInput = ModifyInstancePlacementRequest;
export declare type ModifyInstancePlacementCommandOutput = ModifyInstancePlacementResult & __MetadataBearer;
export declare class ModifyInstancePlacementCommand extends $Command<ModifyInstancePlacementCommandInput, ModifyInstancePlacementCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyInstancePlacementCommandInput;
    constructor(input: ModifyInstancePlacementCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyInstancePlacementCommandInput, ModifyInstancePlacementCommandOutput>;
    private serialize;
    private deserialize;
}
