import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { SetTerminationProtectionInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetTerminationProtectionCommandInput = SetTerminationProtectionInput;
export declare type SetTerminationProtectionCommandOutput = __MetadataBearer;
export declare class SetTerminationProtectionCommand extends $Command<SetTerminationProtectionCommandInput, SetTerminationProtectionCommandOutput, EMRClientResolvedConfig> {
    readonly input: SetTerminationProtectionCommandInput;
    constructor(input: SetTerminationProtectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetTerminationProtectionCommandInput, SetTerminationProtectionCommandOutput>;
    private serialize;
    private deserialize;
}
