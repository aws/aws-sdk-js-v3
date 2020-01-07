import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { SetSMBGuestPasswordInput, SetSMBGuestPasswordOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetSMBGuestPasswordCommandInput = SetSMBGuestPasswordInput;
export declare type SetSMBGuestPasswordCommandOutput = SetSMBGuestPasswordOutput & __MetadataBearer;
export declare class SetSMBGuestPasswordCommand extends $Command<SetSMBGuestPasswordCommandInput, SetSMBGuestPasswordCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: SetSMBGuestPasswordCommandInput;
    constructor(input: SetSMBGuestPasswordCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetSMBGuestPasswordCommandInput, SetSMBGuestPasswordCommandOutput>;
    private serialize;
    private deserialize;
}
