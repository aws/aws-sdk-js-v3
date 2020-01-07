import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ModifyInstanceFleetInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyInstanceFleetCommandInput = ModifyInstanceFleetInput;
export declare type ModifyInstanceFleetCommandOutput = __MetadataBearer;
export declare class ModifyInstanceFleetCommand extends $Command<ModifyInstanceFleetCommandInput, ModifyInstanceFleetCommandOutput, EMRClientResolvedConfig> {
    readonly input: ModifyInstanceFleetCommandInput;
    constructor(input: ModifyInstanceFleetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyInstanceFleetCommandInput, ModifyInstanceFleetCommandOutput>;
    private serialize;
    private deserialize;
}
