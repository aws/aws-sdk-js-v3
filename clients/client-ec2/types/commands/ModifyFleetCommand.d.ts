import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyFleetRequest, ModifyFleetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyFleetCommandInput = ModifyFleetRequest;
export declare type ModifyFleetCommandOutput = ModifyFleetResult & __MetadataBearer;
export declare class ModifyFleetCommand extends $Command<ModifyFleetCommandInput, ModifyFleetCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyFleetCommandInput;
    constructor(input: ModifyFleetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyFleetCommandInput, ModifyFleetCommandOutput>;
    private serialize;
    private deserialize;
}
